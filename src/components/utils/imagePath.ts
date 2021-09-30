// このファイルはscript/genImagePath.tsによって上書きされるため、手動での修正をしないでください
export type Path = ""
export const getImagePath = (path: Path, root?: string) => `${root ?? '/assets/images/'}${path}`
