export default {
    name: 'TheQuoteComponent',
    template: `<h2 class="load-title">{{ quote }}</h2>`,
    data() {
      return {
        quotes: [
          "He is trying his best",
        ],
        quote: "Getting Stuff Ready...", // Initialize with a default quote
      };
    },
    created() {
      this.fetchRandomQuote();
    },
    methods: {
      fetchRandomQuote() {
        // Get a random quote from the local array
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.quote = this.quotes[randomIndex];
      },
    },
  };
  