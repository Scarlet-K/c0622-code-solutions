select "name" as "Genre",
        count("firstName") as "Lisa Monroe"
  from "castMembers"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "name";
