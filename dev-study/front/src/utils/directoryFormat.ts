interface Row {
  name: string;
  layer: number;
}

function countLeadingSpaces(str: string) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "\t") {
      count++;
    } else {
      // 最初の非スペースまたはタブ文字が見つかったらループを終了
      break;
    }
  }
  return count;
}

function folderStringToList(folderStr: string): Row[] {
  const lines = folderStr.split("\n");

  const rows = lines.map((line) => {
    const level = Math.floor(countLeadingSpaces(line) / 2);
    return { name: line.trim(), layer: level } as Row;
  });

  return rows;
}

function maxLayerOfTree(rows: Row[]): number {
  return rows.reduce((acc, cur) => {
    return Math.max(acc, cur.layer);
  }, 0);
}

function rowsToLayerMap(rows: Row[]): boolean[][] {
  if (rows.length === 0) return [];
  const maxLayer = maxLayerOfTree(rows);
  const result: boolean[][] = Array(maxLayer + 1)
    .fill(false)
    .map(() => Array(rows.length).fill(false));
  rows.forEach((row, i) => {
    result[row.layer][i] = true;
  });
  return result;
}

function rowsToTreeString(rows: Row[]): string {
  let lines: string[] = Array(rows.length).fill("");
  const maxLayer = maxLayerOfTree(rows);
  const layerMap = rowsToLayerMap(rows);
  for (let curLayer = 0; curLayer <= maxLayer; curLayer++) {
    let end_flag = false;
    const currentLayerMap = layerMap[curLayer];
    const nextLayerMap = layerMap[curLayer + 1];
    lines = lines.map((line, row) => {
      // もう確定済み
      if (rows[row].layer < curLayer) return line;
      // そのレイヤーにディレクトリ存在
      if (rows[row].layer === curLayer) {
        end_flag = false;
        return line + rows[row].name;
      }
      // 最終レイヤー
      if (curLayer == maxLayer) return line;
      // 次のレイヤーにディレクトリ存在
      if (curLayer != maxLayer && rows[row].layer === curLayer + 1) {
        for (let i = row + 1; i < rows.length; i++) {
          if (end_flag === false && nextLayerMap[i] === true)
            return line + "├─ ";
          if (end_flag === false && currentLayerMap[i] == true) {
            return line + "└─ ";
          }
        }
        return line + "└─ ";
      }
      // まだその階層の次に存在する
      for (let i = row + 1; i < rows.length; i++) {
        if (end_flag === false && currentLayerMap[i] == true) {
          end_flag = true;
          // return line + "└─ ";
        }
        if (end_flag === false && nextLayerMap[i] === true) {
          return line + "│  ";
        }
      }
      return line + "   ";
    });
  }

  return lines.join("  \n");
}
export const folderStringToTreeString = (folderString: string) => {
  return rowsToTreeString(folderStringToList(folderString));
};
