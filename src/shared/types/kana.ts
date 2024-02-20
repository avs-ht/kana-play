import kanaChoice from "./kanaChoice";

export  interface KanaJSON {
    char: string;
    pronunciation: string;
}

export type Kana = {
    [key in kanaChoice]: string[];
};

export  type KanaLength = {
    [key in kanaChoice]: number;
};