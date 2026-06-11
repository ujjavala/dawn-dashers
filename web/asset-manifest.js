// @ts-nocheck

(function initDawnDashersAssetManifest(global) {
  const manifest = {
    environment: {
      hdri: '/Assets/HDRI/terrain_master.hdr'
    },
    regions: {
      dunes: [
        { url: '/Assets/GLTF/outback/outback_cliffs.glb', position: [0, -2.4, -26], scale: 5.8 },
        { url: '/Assets/GLTF/outback/outback_dunes.glb', position: [0, -2.2, -16], scale: 5.2 }
      ],
      forest: [
        { url: '/Assets/GLTF/bushland/eucalyptus_cluster_a.glb', position: [-8, -1.8, -16], scale: 3.2 },
        { url: '/Assets/GLTF/bushland/eucalyptus_cluster_b.glb', position: [8, -1.8, -22], scale: 3.1 },
        { url: '/Assets/GLTF/bushland/forest_floor.glb', position: [0, -2.4, -18], scale: 4.6 }
      ],
      industrial: [
        { url: '/Assets/GLTF/servo/servo_station.glb', position: [0, -2.3, -21], scale: 4.5 },
        { url: '/Assets/GLTF/servo/industrial_props.glb', position: [0, -2.3, -19], scale: 4.1 }
      ],
      beach: [
        { url: '/Assets/GLTF/coast/coastline_cliffs.glb', position: [0, -2.6, -27], scale: 5.1 },
        { url: '/Assets/GLTF/coast/lighthouse_set.glb', position: [0, -2.1, -23], scale: 4.3 },
        { url: '/Assets/GLTF/coast/water_plane_stylized.glb', position: [0, -2.6, -18], scale: 4.9 }
      ],
      mountains: [
        { url: '/Assets/GLTF/tasmania/tasmania_ridges.glb', position: [0, -2.7, -30], scale: 5.7 },
        { url: '/Assets/GLTF/tasmania/tasmania_firline.glb', position: [0, -2.5, -20], scale: 4.8 },
        { url: '/Assets/GLTF/tasmania/aurora_ribbons.glb', position: [0, 6, -33], scale: 4.2 }
      ]
    },
    dashers: {
      emu: '/Assets/GLTF/animals/emu.glb',
      wombat: '/Assets/GLTF/animals/wombat.glb',
      wallaby: '/Assets/GLTF/animals/wallaby.glb',
      kangaroo: '/Assets/GLTF/animals/kangaroo.glb',
      koala: '/Assets/GLTF/animals/koala.glb',
      platypus: '/Assets/GLTF/animals/platypus.glb',
      possum: '/Assets/GLTF/animals/possum.glb',
      echidna: '/Assets/GLTF/animals/echidna.glb',
      cockatoo: '/Assets/GLTF/animals/cockatoo.glb',
      dingo: '/Assets/GLTF/animals/dingo.glb',
      bilby: '/Assets/GLTF/animals/bilby.glb',
      tasdevil: '/Assets/GLTF/animals/tasdevil.glb',
      kookaburra: '/Assets/GLTF/animals/kookaburra.glb',
      quokka: '/Assets/GLTF/animals/quokka.glb',
      numbat: '/Assets/GLTF/animals/numbat.glb'
    }
  };

  global.DawnDashersAssetManifest = manifest;
})(globalThis);
