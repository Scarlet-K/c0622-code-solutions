select "countries"."name" as "country",
       count(*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
