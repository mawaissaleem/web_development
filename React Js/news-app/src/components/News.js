import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    static propTypes = {}
    articles = [    ]
    static defaultProps = {
        country: "us",
        category: "general",
        pageSize: 10
      }
    propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.integer
      };
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page:1,
            totoalArticles: 0
            
        }
        document.title=`Daily news - ${this.capitalizeFirstLetter(this.props.category) }`
    }

    async updateComponent(){
        this.props.setProgress(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517003d75d7544c58793ee6c06d925cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        this.props.setProgress(50);
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,
             totalArticles: parsedData.totalResults,
            loading: false})
         this.props.setProgress(100);
    }

    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517003d75d7544c58793ee6c06d925cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles,
        //      totalArticles: parsedData.totalResults,
        //     loading: false})

        this.updateComponent();
    }
    handlePrevClick=async ()=>{
        
    //     console.log("prev clicked");
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517003d75d7544c58793ee6c06d925cb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data=await fetch(url);
    //     let parsedData=await data.json();
    //     console.log(parsedData);
    //     this.setState({articles: parsedData.articles,
    //     page: this.state.page - 1,
    // loading: false})
    this.setState({
        page: this.state.page -1
    })
        this.updateComponent();
        
    }
    handleNextClick=async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)){

        }
        else{
        //     console.log("next clicked");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517003d75d7544c58793ee6c06d925cb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles,
        // page: this.state.page + 1,
        // loading: false}) 
        // }
        this.setState({
            page: this.state.page + 1
        })
            this.updateComponent();
            
        
    }
}
fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517003d75d7544c58793ee6c06d925cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles: this.state.articles.concat(parsedData.articles) ,
             totalArticles: parsedData.totalResults,
            loading: false})
  };

    render() {

        return (
            <>

           
                <h2 className="text-center my-5">Daily News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
                {/* {this.state.loading && <Spinner/>} */}
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalArticles}
                    loader={<Spinner/>}
                    >

                        {/* below function is used when we use previous and next butons */}
                {/* <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                        </div>
                    })} */}
                     <div className="container my-4">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>

                    {/* these buttons will be used when we want to use next and prevoius buttons */}
                {/* <div className="my-4 d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button disabled={this.state.page>= this.state.totalArticles/this.props.pageSize} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &raquo;</button>
                </div> */}
                

            
        </>
        )
    }
}

export default News