#!/usr/bin/env ts-node-script
import { fetchSet, normalizeCardsByCode, fetchCardImages } from "./api";
import * as fs from "fs";

async function main() {
  try {
    const set = await fetchSet("core");
    const byId = normalizeCardsByCode(set);
    const buf = Buffer.from(JSON.stringify(byId));
    fs.writeFileSync(`../cards/core/byId.json`, buf);

    fetchCardImages(set, async (card: any, imgBuf: Buffer) => {
      fs.writeFileSync(`../cards/core/img/${card.code}.jpg`, imgBuf);
    });
  } catch (error) {
    console.log({ error });
  }
}

main();
