const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("error", () => {
    const wrapper = video.closest(".video-block");
    if (!wrapper || wrapper.querySelector(".video-tip")) return;

    const tip = document.createElement("div");
    tip.className = "video-tip";
    tip.textContent = "当前为视频占位区域。请将对应 MP4 文件放入 videos 文件夹。";
    tip.style.marginTop = "12px";
    tip.style.color = "rgba(246,247,251,.68)";
    tip.style.fontSize = "14px";
    wrapper.querySelector(".video-copy").appendChild(tip);
  });
});
