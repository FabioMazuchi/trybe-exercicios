use('class');

// QUERY //
db.movies.updateMany(
  {},
  { $set: { sequels: 0 } }
);

// RESULTS //
[
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537b"
    },
    "title": "Batman",
    "category": ["action", "adventure"],
    "imdbRating": 38.8,
    "estimatedBudget": 35,
    "sequels": 0
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537c"
    },
    "title": "Godzilla",
    "category": ["action", "thriller", "sci-fi"],
    "imdbRating": 8.6,
    "budget": 1,
    "sequels": 0
  },
  {
    "_id": {
      "$oid": "62d97fd7a253de275e69537d"
    },
    "title": "Home Alone",
    "category": ["family", "comedy"],
    "imdbRating": 5.5,
    "budget": 5,
     "lastUpdated": {
      "$timestamp": {
        "t": 1658424399,
        "i": 1
      }
    },
    "sequels": 0
  }
]