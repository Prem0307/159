AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        "superman":{
          banner_url: "assets\superman-banner.jpg",
          title: "Superman",
          description:
            "Superman is from dc comics",
        },
        "spiderman": {
          banner_url: "assets\spidy-banner.jpg",
          title: "Spiderman",
          description:
            "Spider-Man is a fictional superhero.",
        },
        "captain-america": {
          banner_url: "assets\captainamerica-banner.jpg",
          title: "Captain America",
          description:'Captain america life'
        },
        "iron-man": {
          banner_url: "assets\ironman-banner.jpg",
          title: "Ironman",
          description:
            "Ironman life",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  