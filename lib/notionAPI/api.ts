import { Client } from "@notionhq/client/build/src";
import { ArticleType, ArticleKeys } from "./types";

export default class NotionAPI {
  static _apiKey = process.env.NOTION_API_KEY;
  static _databaseID = process.env.NOTION_API_DATABASE_ID;
  static _notionInstance = new Client({ auth: this._apiKey });
  static _articles: ArticleType = {
    seoul: process.env.NOTION_API_SEOUL_ARTICLE_ID,
    wanted: process.env.NOTION_API_WANTED_ARTICLE_ID,
  };

  static async _getDatabaseWithQuery(query = {}): Promise<any[]> {
    const response = await this._notionInstance.databases.query({
      database_id: this._databaseID as string,
      ...query,
    });
    return response.results;
  }

  static async _getBlockContents(block_id: string) {
    const response = await this._notionInstance.blocks.children.list({
      block_id,
    });
    return response.results;
  }

  static async getArticleContents(type: ArticleKeys) {
    const block_id = this._articles[type];
    if (typeof block_id === "string") {
      const results = this._getBlockContents(block_id);
      return results;
    } else {
      throw new Error();
    }
  }
}
