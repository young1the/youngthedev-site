import { Client } from "@notionhq/client/build/src";

export default class NotionAPI {
  static _apiKey = process.env.NOTION_API_KEY;
  static _databaseID = process.env.NOTION_API_DATABASE_ID;
  static _notionInstance = new Client({ auth: this._apiKey });

  static async _getDatabase(query = {}): Promise<any[]> {
    const response = await this._notionInstance.databases.query({
      database_id: this._databaseID as string,
      ...query,
    });
    return response.results;
  }

  static async getPageContent(page_id: string) {
    const response = await this._notionInstance.blocks.children.list({
      block_id: page_id,
    });
    return response;
  }

  static async getDatabaseList(): Promise<any> {
    const results = await this._getDatabase();
    const list = results.map((ele: any) => {
      return {
        id: ele.id + "description",
        title: ele.properties.description.rich_text[0].plain_text,
      };
    });
    return list;
  }
}
