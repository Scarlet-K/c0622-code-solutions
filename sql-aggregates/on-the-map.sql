select "countries"."name" as "Country",
       count(*) as "Cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
