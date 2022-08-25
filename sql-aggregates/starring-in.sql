select "genres"."name" as "genre",
       count("castMembers"."actorId")
  from "castMembers"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  group by "genres"."name"
