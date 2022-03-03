<template>
  <div class="pageBox">
    <div id="photosphere"></div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log(`初始化`)
      this.init()
    })
  },
  methods: {
    async init() {
      const PhotoSphereViewer = window.PhotoSphereViewer
      let viewer = new PhotoSphereViewer.Viewer({
        container: `photosphere`,
        loadingImg: `http://127.0.0.1:9100/static/photo-sphere-viewer.js.org/assets/photosphere-logo.gif`,
        // caption: "Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>",
        defaultLong: `100deg`,
        plugins: [
          [
            PhotoSphereViewer.MarkersPlugin,
            {
              hideButton: false,
              listButton: true,
            },
          ],
          [
            PhotoSphereViewer.VirtualTourPlugin,
            {
              positionMode: PhotoSphereViewer.VirtualTourPlugin.MODE_GPS,
              renderMode: PhotoSphereViewer.VirtualTourPlugin.MODE_3D,
            },
          ],
        ],
      })

      let virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin)

      virtualTour.setNodes(
        [
          {
            id: `1`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-1.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-1-thumb.jpg`,
            name: `One`,
            links: [{ nodeId: `2` }],
            markers: [
              {
                id: `marker-1`,
                image: `http://127.0.0.1:9100/static/photo-sphere-viewer.js.org/assets/pin-red.png`,
                tooltip: `Cape Florida Light, Key Biscayne`,
                width: 32,
                height: 32,
                anchor: `bottom center`,
                longitude: `105deg`,
                latitude: `35deg`,
              },
            ],
            position: [-80.156479, 25.666725, 3],
            panoData: { poseHeading: 327 },
          },
          {
            id: `2`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-2.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-2-thumb.jpg`,
            name: `Two`,
            links: [{ nodeId: `3` }, { nodeId: `1` }],
            position: [-80.156168, 25.666623, 3],
            panoData: { poseHeading: 318 },
          },
          {
            id: `3`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-3.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-3-thumb.jpg`,
            name: `Three`,
            links: [{ nodeId: `4` }, { nodeId: `2` }, { nodeId: `5` }],
            position: [-80.155932, 25.666498, 5],
            panoData: { poseHeading: 328 },
          },
          {
            id: `4`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-4.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-4-thumb.jpg`,
            name: `Four`,
            links: [{ nodeId: `3` }, { nodeId: `5` }],
            position: [-80.156089, 25.666357, 3],
            panoData: { poseHeading: 78 },
          },
          {
            id: `5`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-5.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-5-thumb.jpg`,
            name: `Five`,
            links: [{ nodeId: `6` }, { nodeId: `3` }, { nodeId: `4` }],
            position: [-80.156292, 25.666446, 2],
            panoData: { poseHeading: 190 },
          },
          {
            id: `6`,
            panorama: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-6.jpg`,
            thumbnail: `http://127.0.0.1:9100/static/photo-sphere-viewer-data.netlify.app/assets/tour/key-biscayne-6-thumb.jpg`,
            name: `Six`,
            links: [{ nodeId: `5` }],
            position: [-80.156465, 25.666496, 2],
            panoData: { poseHeading: 328 },
          },
        ],
        `1`
      )
    },
    async fn() {
      this.$u.toast(`什么也不干的按钮`)
    },
  },
}
</script>

<style lang="scss" scoped>
.pageBox {
  #photosphere {
    width: 100vw;
    height: calc(100vh - 40px);
  }
}
</style>
