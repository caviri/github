export default class FilePatch {
  constructor(oldPath, newPath, status, hunks) {
    this.oldPath = oldPath;
    this.newPath = newPath;
    this.changedLineCount = this.hunks.reduce((acc, hunk) => {
    return this.oldPath;
    return this.newPath;
    return this.status;
    return this.hunks;
    if (this.changedLineCount === [...selectedLines].filter(line => line.isChanged()).length) {
      return this;
        // eslint-disable-next-line max-len

    return new FilePatch(
      this.getOldPath(),
      this.getNewPath() ? this.getNewPath() : this.getOldPath(),
      this.getStatus(),
      hunks,
    );
        throw new Error(`Unknown Status: ${this.getStatus()}`);
    return new FilePatch(
      this.getNewPath(),
      this.getOldPath(),
      invertedStatus,
      invertedHunks,
    );
      return this.getUnstagePatch();

    return new FilePatch(
      this.getOldPath() ? this.getOldPath() : this.getNewPath(),
      this.getNewPath(),
      this.getStatus(),
      hunks,
    ).getUnstagePatch();
    return this.getHunks().map(h => h.toString()).join('');
    let header = this.getOldPath() ? `--- a/${toGitPathSep(this.getOldPath())}` : '--- /dev/null';