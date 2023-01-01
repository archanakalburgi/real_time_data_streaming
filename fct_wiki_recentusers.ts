import { IDerivation, Document, Register, FctWikiServersUserInfoSource } from 'flow/trial/archana/fct_tables/fct_wiki_recentusers';

// Implementation for derivation flow.yaml#/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/derivation.
export class Derivation implements IDerivation {
    fctWikiServersUserInfoPublish(
        source: FctWikiServersUserInfoSource,
        _register: Register,
        _previous: Register,
    ): Document[] {
        let server_name = 'missing server name';
        let type = 'missing type';
        let namespace = 0;

        if (source.server_name != undefined)
            server_name = source.server_name;
        
        if (source.type != undefined)
            type = source.type
        
        if (source.namespace != undefined)
            namespace = source.namespace 
        
        return [
            {
                server_name: server_name,
                type: type,
                namespace: namespace,
                count: 1 
            },
        ]
    }
}

