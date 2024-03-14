export default {
    name: "TheRandomTextComponent",
    template:`
    <div>
      <h2>{{ randomText }}</h2>
    </div>
  `,
  data() {
    return {
      textOptions: [
        "> Click on an item to learn more...",
        "> Click on an item to zoom in...",
        "> Enable auto-scroll in menu..."
        // Add more text options as needed
      ],
      randomText: "",
    };
  },
  mounted() {
    this.setRandomText();
    //changes how often the text cycles through array above
    setInterval(this.setRandomText, 10000);
  },
  methods: {
    setRandomText() {
        const randomIndex = Math.floor(Math.random() * this.textOptions.length);
        this.randomText = this.textOptions[randomIndex];
      },
  },
};

