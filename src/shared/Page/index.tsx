import { PageActions } from "./PageActions";
import { PageContent } from "./PageContent";
import { PageDescription } from "./PageDescription";
import { PageDescriptionActions } from "./PageDescriptionActions";
import { PageDescriptionInfo } from "./PageDescriptionInfo";
import { PageHeader } from "./PageHeader";
import { PageRequestHeader } from "./PageRequestHeader";
import { PageRoot } from "./PageRoot";

export const Page = {
    Root: PageRoot,
    Actions: PageActions,
    Header: PageHeader,
    RequestHeader: PageRequestHeader,
    Description: PageDescription,
    DescriptionInfo: PageDescriptionInfo,
    DescriptionActions: PageDescriptionActions,
    Content: PageContent
}