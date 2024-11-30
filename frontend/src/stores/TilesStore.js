import { defineStore } from "pinia";

export const UseFieldStore = defineStore("userinfoStore", {
  state: () => ({
    tiles: [
      { x: 0, y: 0.5, z: 0, type: 0 },
      { x: 1, y: 0, z: 0, type: 0 },
      { x: 1, y: 0, z: 1, type: 0 },
      { x: 1, y: 0, z: 2, type: 0 },
      { x: 2, y: 0, z: 0, type: 0 },
      { x: 1, y: 1, z: 0, type: 0 },
      { x: 2, y: 1, z: 0, type: 0 },
      { x: 2, y: 1, z: 1, type: 0 },
      { x: 3, y: 0.5, z: 0, type: 0 },
      { x: 4, y: 0.5, z: 0, type: 0 },
    ],
    deletedtiles: [],
  }),
  actions: {
    deleted(tiles) {
      this.deletedtiles.push(tiles[0]);
      this.deletedtiles.push(tiles[1]);
      
    },
  },
});
