
// Document is a relaxed signature for a Flow document of any kind.
export type Document = unknown;
// Lambda is a relaxed signature implemented by all Flow transformation lambdas.
export type Lambda = (source: Document, register?: Document, previous?: Document) => Document[];

// Import derivation classes from their implementation modules.
import { Derivation as trialArchanaFctTablesFctWikiRecentusers } from '../../fct_wiki_recentusers';

// Build instances of each class, which will be bound to this module's router.
const __trialArchanaFctTablesFctWikiRecentusers: trialArchanaFctTablesFctWikiRecentusers = new trialArchanaFctTablesFctWikiRecentusers();

// Now build the router that's used for transformation lambda dispatch.
const routes: { [path: string]: Lambda | undefined } = {
    '/derive/trial/archana/fct_tables/fct_wiki_recentusers/fct_wiki_servers_user_info/Publish': __trialArchanaFctTablesFctWikiRecentusers.fctWikiServersUserInfoPublish.bind(
        __trialArchanaFctTablesFctWikiRecentusers,
    ) as Lambda,
};

export { routes };
