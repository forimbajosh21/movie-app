API
https://www.themoviedb.org

search (API for listing possible search movie)
/search/trending?query=

response struct
{
"adult": boolean,
"backdrop_path": string,
"genre_ids": number[],
"id": number,
"original_language": string,
"original_name": string,
"overview": string,
"popularity": number,
"poster_path": string,
"release_date": string,
"name": string,
"video": boolean,
"vote_average": number,
"vote_count": number,
"media_id": string,
"media_type": "movie" | "tv" | "person",
} | string

{
"results": [
{
"adult": false,
"backdrop_path": "/b6IiUcxZrNLzKEJiNTZX5YIXYni.jpg",
"genre_ids": [
35,
10751,
14,
10770
],
"id": 50332,
"original_language": "en",
"original_name": "Snow",
"overview": "Nick Snowden is reluctantly taking over the family business and with only three days before the big night, one of Nick's younger reindeer is stolen from the North Pole and taken to a zoo.",
"popularity": 0.5897,
"poster_path": "/xLJhBJrjXg5z0G9D3kGd3RG76kG.jpg",
"release_date": "2004-12-13",
"name": "Snow",
"video": false,
"vote_average": 7.1,
"vote_count": 27,
"media_id": "4ced5f627b9aa1313b0000c1",
"media_type": "movie"
},
{
"adult": false,
"backdrop_path": "/fNeozoiSbwr8XVB31Dcr39ccjYF.jpg",
"genre_ids": [
10751,
35,
10762,
9648
],
"id": 244919,
"origin_country": [
"SE"
],
"original_language": "sv",
"original_name": "Snödrömmar",
"overview": "The snow is mysteriously missing from ski resort Gavmofjäll, leading 14-year old sámi girl Ristin and her little sister Aila on a quest deep into the ancient secrets of the mountain to save their family from catastrophe.",
"popularity": 2.2228,
"poster_path": "/mF2KuN917JQmRYJTI74s0hGlunr.jpg",
"first_air_date": "2024-12-01",
"name": "Snow Dreams",
"vote_average": 6.7,
"vote_count": 3,
"media_id": "65b851745be00e0182595607",
"media_type": "tv"
},
{
"adult": false,
"gender": 0,
"id": 2007899,
"known_for_department": "Acting",
"name": "Snow",
"original_name": "Snow",
"popularity": 0.0552,
"profile_path": null,
"media_id": "5ab8ad560e0a261ff102ec14",
"media_type": "person",
"known_for": [
{
"backdrop_path": "/i4sEiJzFK5pGVA3bvbbcOCRAjFt.jpg",
"id": 514203,
"name": "The Goose Goes South",
"original_name": "대관람차",
"overview": "Woozoo visits Osaka to finish his business as his boss Dae-jung has gone missing in a ship accident. On the last day, Woozoo chases someone looking exactly like Dae-jung. He ends up losing him, but the guitar sound draws him to a small bar, Pier 34. Its owner, Snow, somehow reminds him of Dae-jung and listening to his music brings back memories. After passing out right there, Woozoo misses his flight back to Korea and then quits his job on a whim. He soon meets Haruna who learns guitar from Snow. And he decides to stay at Pier 34 till he finds Dae-jung.",
"poster_path": "/gfeuAfnqJYIDVzo6LXVv6B0EYSz.jpg",
"media_type": "movie",
"media_id": "5ab8acbc925141396102d246",
"adult": false,
"original_language": "ko",
"genre_ids": [
18,
10402
],
"popularity": 0.2134,
"release_date": "2018-08-30",
"video": false,
"vote_average": 7,
"vote_count": 4
}
]
},
"<span data-media-type=\"/movie\" data-search-name=\"Snow\">Snow</span>",
"<span data-media-type=\"/person\" data-search-name=\"Snow\">Snow</span>",
"<span data-media-type=\"/tv\" data-search-name=\"Snow Dreams (Snödrömmar)\">Snow Dreams (Snödrömmar)</span>"
]
}
