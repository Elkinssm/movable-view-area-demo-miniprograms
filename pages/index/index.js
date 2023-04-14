Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  goToScroll() {
    my.navigateTo({
      url: "/pages/scroll-view/scroll-view"
    });
  },
  goToMovable() {
    my.navigateTo({
      url: "/pages/movable-view/movable-view"
    });
  }
});
