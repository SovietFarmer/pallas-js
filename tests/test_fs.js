import * as fs from 'fs';

function assert(actual, expected, message) {
  if (arguments.length == 1)
    expected = true;

  if (actual === expected)
    return;

  if (actual !== null && expected !== null
    && typeof actual == 'object' && typeof expected == 'object'
    && actual.toString() === expected.toString())
    return;

  throw Error("assertion failed: got |" + actual + "|" +
    ", expected |" + expected + "|" +
    (message ? " (" + message + ")" : ""));
}

function test_file1() {
  var f, len, str, size, buf, ret, i, str1;

  f = fs.tmpfile();
  str = "hello world\n";
  f.puts(str);

  f.seek(0, fs.SEEK_SET);
  str1 = f.readAsString();
  assert(str1 === str);

  f.seek(0, fs.SEEK_END);
  size = f.tell();
  assert(size === str.length);

  f.seek(0, fs.SEEK_SET);

  buf = new Uint8Array(size);
  ret = f.read(buf.buffer, 0, size);
  assert(ret === size);
  for (i = 0; i < size; i++) {
    assert(buf[i] === str.charCodeAt(i));
  }

  f.close();
}

function test_file2() {
  var f, str, i, size;
  f = fs.tmpfile();
  str = "hello world\n";
  size = str.length;
  for (i = 0; i < size; i++)
    f.putByte(str.charCodeAt(i));
  f.seek(0, fs.SEEK_SET);
  for (i = 0; i < size; i++) {
    assert(str.charCodeAt(i) === f.getByte());
  }
  assert(f.getByte() === -1);
  f.close();
}

function test_open() {
  try { fs.open("/../test.js", "r"); assert(false); } catch (e) { }
  try { fs.open(currentScript.directory.concat("/../dev.yml"), "r"); assert(false); } catch (e) { }
  assert(typeof fs.open("Pallas.js", "r") === 'object');
  assert(typeof fs.open("/Pallas.js", "r") === 'object');
  assert(typeof fs.open("\\Pallas.js", "r") === 'object');
  assert(typeof fs.open("./Pallas.js", "r") === 'object');
  assert(typeof fs.open(".\\Pallas.js", "r") === 'object');
}

function test_getline() {
  var f, line, line_count, lines, i;

  lines = ["hello world", "line 1", "line 2"];
  f = fs.tmpfile();
  for (i = 0; i < lines.length; i++) {
    f.puts(lines[i], "\n");
  }

  f.seek(0, fs.SEEK_SET);
  assert(!f.eof());
  line_count = 0;
  for (; ;) {
    line = f.getline();
    if (line === null)
      break;
    assert(line == lines[line_count]);
    line_count++;
  }
  assert(f.eof());
  assert(line_count === lines.length);

  f.close();
}

function test_rm() {
  const fname = "tmp_file.txt";
  const content = "hello world";

  const f = fs.open(fname, "w");
  f.puts(content);
  f.close();

  assert(fs.rm(fname));
  assert(!fs.open(fname, "r"));
}

function test_rename() {
  const fname = "tmp_file.txt";
  const fnameNew = "tmp_file2.txt";
  const content = "hello world";

  const f = fs.open(fname, "w");
  f.puts(content);
  f.close();

  fs.rename(fname, fnameNew);
  assert(!fs.open(fname, "r"));
  assert(typeof fs.open(fnameNew, "r") === 'object');
  assert(fs.rm(fnameNew));
  assert(!fs.open(fnameNew, "r"));
}

function test_mkdir() {
  assert(fs.mkdir("tmp/sub/dir"));
  assert(fs.rm("tmp/sub/dir"));
  assert(fs.rm("tmp/sub"));
  assert(fs.rm("tmp"));

  assert(fs.mkdir("tmp/sub/dir"));
  assert(fs.rm("tmp", true));
}

test_file1();
test_file2();
test_open();
test_getline();
test_rm();
test_rename();
test_mkdir();