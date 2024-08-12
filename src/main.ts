import './style.css'

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';

let deck = new Reveal({
    hash: true,
    minScale: 0.001,
    maxScale: 10,
    plugins: [Markdown, RevealHighlight],
});
deck.initialize();


