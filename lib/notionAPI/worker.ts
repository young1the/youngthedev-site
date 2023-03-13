import { Client } from "@notionhq/client/build/src";
import {
  Page,
  Database,
  CMSBlock,
  NotionData,
  DatabaseResponse,
  BlockResponse,
} from "./types";

export default class NotionAPI {
  static _apiKey = process.env.NOTION_API_KEY;
  static _CMSID = process.env.NOTION_API_CMS_ID;
  static _notionInstance = new Client({ auth: this._apiKey });

  static async getCMS() {
    const datas = (await this._getBlockContents(
      this._CMSID as string
    )) as CMSBlock[];
    const results: NotionData[] = await Promise.all(
      datas.map(async (block) => {
        const type = block.type;
        const id = block.id;
        const title = block[type].title;
        let content;
        if (type === "child_page") {
          content = await this._getPageContent(id);
        } else {
          content = await this._getDatabaseWithQuery(id);
        }
        return { type, id, title, content };
      })
    );
    return results;
  }

  static async _getDatabaseWithQuery(
    id: string,
    query = {}
  ): Promise<Database[]> {
    const response = await this._notionInstance.databases.query({
      database_id: id,
      ...query,
    });
    const content = this._pickDatabase(response.results as DatabaseResponse[]);
    return content;
  }

  static _pickDatabase(results: DatabaseResponse[]): Database[] {
    const content = results.map((data) => {
      const id = data.id;
      const url = data.url;
      const cover = data.cover.file.url;
      const properties = data.properties;
      return { id, properties, url, cover };
    });
    return content;
  }

  static async _getBlockContents(block_id: string) {
    const response = await this._notionInstance.blocks.children.list({
      block_id,
    });
    return response.results;
  }

  static async _pickBlockContent(contents: BlockResponse[]) {
    const parsedDatas: Page[] = await Promise.all(
      contents.map(async (ele) => {
        let children = null;
        if (ele.has_children) {
          const childrenData = await this._getBlockContents(ele.id);
          children = await this._pickBlockContent(
            childrenData as BlockResponse[]
          );
        }
        return {
          type: ele.type,
          id: ele.id,
          content: ele[ele.type],
          children,
        };
      })
    );
    return parsedDatas;
  }

  static async _getPageContent(block_id: string) {
    const data = await this._getBlockContents(block_id);
    const content = await this._pickBlockContent(data as BlockResponse[]);
    return content;
  }
}
