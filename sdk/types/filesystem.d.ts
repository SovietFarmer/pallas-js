// @ts-nocheck
declare module "fs" {
  /** @deprecated since 1.9.6 */
  declare class Path {
    constructor(path: String);

    isDirectory: Boolean;
    isRegularFile: Boolean;
  }

  /** @deprecated since 1.9.6 */
  declare class Directory {
    entries: Array<Path>;
  }

  declare class File {
    close(): number;
    flush(): void;
    tell(): number;
    seek(offset: number, whence: number): number;
    eof(): boolean;
    read(buffer: ArrayBuffer, position: number, length: number): boolean;
    write(buffer: ArrayBuffer, position: number, length: number): boolean;
    getline(): string;
    readAsString(maxLength?: number): string;
    puts(...args: string): void;
    getByte(): number;
    putByte(c: number): number;
  }

  declare class Dir {
    path: string;

    close(): void;
    read(): Dirent | null;
  }

  declare class Dirent {
    name: string;
    path: string;

    isFile(): boolean;
    isDirectory(): boolean;
  }

  function open(path: string, mode: string): File?;
  function opendir(path: string): Dir;
  function tmpfile(): File?;
  function exists(path: string): boolean;
  function rm(path: string, recursive?: boolean): boolean;
  function rename(oldPath: string, newPath: string): void;
  function mkdir(path: string): boolean;
}
