-- with replacementCost as (
--   select "filmId" as "copies"
--   from "inventory"
-- )

select "filmId",
       count("filmId") as "Copies"
  from "inventory"
  group by "filmId";

-- select "title",
--        "description",
--        "rating",
--        count() as "totalProfit"
--   from ""
--   order by "totalProfit" desc
--   limit 5;
