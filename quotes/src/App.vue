<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <qpp-new-quote @quoteAdded="newQuote"></qpp-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import QuoteGrid from './components/QuoteGrid'
    import NewQuote from "./components/NewQuote";

    export default {
        data: function () {
            return {
                quotes: [
                    'Just a Quote to see something'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            qppNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote: function (quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    alert('You have already added the maximum number of quotes.')
                } else {
                    this.quotes.push(quote);
                }
            },
            deleteQuote: function (index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
