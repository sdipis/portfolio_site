export default {
    name: "TheRandomTextComponent",
    template:`
    <h2>
   {{ randomText }}
    </h2>
  `,
  data() {
    return {
      textOptions: [
        'Click on an item to learn more...',
        'Enable auto-scroll in the menu...',
        'Click on an item to zoom in...',
        'Enable SFX in the menu...',
        'Made by Spencer Dipi...',
        'Now in Hypno-Vision...'
      ],
      randomText: ``,
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

