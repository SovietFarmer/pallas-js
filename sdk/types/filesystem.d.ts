// @ts-nocheck
declare module "fs" {
  declare class Path {
    constructor(path: String);

    isDirectory: Boolean;
    isRegularFile: Boolean;
  }

  declare class Directory {
    entries: Array<Path>;
  }

  declare class File {
    close(): void;
    flush(): void;
    tell(): number;
    eof(): boolean;
    read(buffer: ArrayBuffer, position: number, length: number): boolean;
    write(buffer: ArrayBuffer, position: number, length: number): boolean;
    getline(): String;
  }

  function open(filename: Path | String): File | Directory;
  function remove(filename: Path | String): boolean;
  function rename(oldname: Path | String, newname: Path | String);
  function mkdir(path: Path | String): boolean;
}
