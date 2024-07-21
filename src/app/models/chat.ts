export interface MessageRequest {
    text: string;
}

export interface Chat {
    content: string;
    user_id: string;
    type:    string;
    why:     Why;
}

export interface Why {
    input:              string;
    intermediate_steps: Array<Array<string[] | string>>;
    memory:             Memory;
}

export interface Memory {
    episodic:    Declarative[];
    declarative: Declarative[];
    procedural:  Procedural[];
}

export interface Declarative {
    id:           string;
    metadata:     DeclarativeMetadata;
    page_content: string;
    type:         string;
    score:        number;
}

export interface DeclarativeMetadata {
    source: string;
    when:   number;
}

export interface Procedural {
    id:           string;
    metadata:     ProceduralMetadata;
    page_content: string;
    type:         string;
    score:        number;
}

export interface ProceduralMetadata {
    source:       string;
    type:         string;
    trigger_type: string;
    when:         number;
}