export interface MousePosition {
    x: number;
    y: number;
}
 
export interface PopUpMenuItensInterface {
    SortItens: PopUpMenuContent[],
    AspectRatio: PopUpMenuContent[],
  
  }

export interface PopUpMenuContent {
    id: number,
    text: string,
    onClick: void
    // onClick: React.MouseEventHandler
}