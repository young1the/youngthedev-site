import { Client } from "@notionhq/client/build/src";
import {
  ArticleType,
  ArticleKeys,
  ParsedDataType,
  ProjectType,
  PropertiesType,
} from "./types";

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
    console.log(response.results);
    return response.results;
  }

  static _parseDataBaseResults(results: any[]): ProjectType[] {
    const parsed = results.map((data) => {
      const id = data.id;
      const url = data.url;
      const cover = data.cover.file.url;
      const properties = data.properties as PropertiesType;
      return { id, properties, url, cover };
    });
    return parsed;
  }

  static async getProjects() {
    const results = await this._getDatabaseWithQuery();
    const projects = this._parseDataBaseResults(results);
    return projects;
  }
  static async _getBlockContents(block_id: string) {
    const response = await this._notionInstance.blocks.children.list({
      block_id,
    });
    return response.results;
  }

  static async _pickBlockContents(contents: any[]) {
    const parsedDatas: ParsedDataType[] = await Promise.all(
      contents.map(async (ele) => {
        let children = null;
        if (ele.has_children) {
          const childrenData = await this._getBlockContents(ele.id);
          children = await this._pickBlockContents(childrenData);
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

  static async getArticleContents(type: ArticleKeys) {
    const block_id = this._articles[type];
    if (typeof block_id === "string") {
      const blockContents = await this._getBlockContents(block_id);
      const contents = await this._pickBlockContents(blockContents);
      return contents;
    }
    return null;
  }
}
