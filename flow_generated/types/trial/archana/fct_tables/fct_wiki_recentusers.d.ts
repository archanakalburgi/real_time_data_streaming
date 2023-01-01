
// Generated from collection schema flow.yaml?ptr=/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/schema.
// Referenced from flow.yaml#/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers.
export type Document = {
    count: number;
    namespace: number;
    server_name: string;
    type: string;
};


// Generated from derivation register schema flow.yaml?ptr=/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/derivation/register/schema.
// Referenced from flow.yaml#/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/derivation.
export type Register = unknown;


// Generated from transform fct_wiki_servers_user_info as a re-export of collection estuary/public/wikipedia/recentchange.
// Referenced from flow.yaml#/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/derivation/transform/fct_wiki_servers_user_info."
import { Document as FctWikiServersUserInfoSource } from "./../../../estuary/public/wikipedia/recentchange";
export { Document as FctWikiServersUserInfoSource } from "./../../../estuary/public/wikipedia/recentchange";


// Generated from derivation flow.yaml#/collections/trial~1archana~1fct_tables~1fct_wiki_recentusers/derivation.
// Required to be implemented by fct_wiki_recentusers.ts.
export interface IDerivation {
    fctWikiServersUserInfoPublish(
        source: FctWikiServersUserInfoSource,
        register: Register,
        previous: Register,
    ): Document[];
}
