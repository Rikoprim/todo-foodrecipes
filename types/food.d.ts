declare module IFood {
  interface ListUnit {
    units: IUnit[]
  }

  interface ListProsedure {
    prosedure: IProsedure[]
    name: any | null;
    editId: number;
    isInput: boolean;
  }

  interface ListReceipt {
    receipt: IMaterial[],
    amount: number;
    name: any | null;
    title: any | null;
    idEdit: number;
    isTitle: boolean;
  }

  interface IMaterials {
    material: IMaterial[];
    name: any | null;
    unit: any | null;
    isInput: boolean;
    editId: number;
  }

  interface IUnit {
    id: number;
    name: string;
  }

  interface IMaterial {
    id: number;
    name: string | null;
    unit: string | null;
    amount?: number | null;
    isAmount?: boolean;
    isName?: boolean;
  }

  interface IProsedure {
    id: number;
    name: string;
  }
}