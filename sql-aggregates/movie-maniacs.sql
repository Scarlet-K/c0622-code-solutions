select "firstName",
       "lastName",
       sum("amount") as "totalPaid"
  from "payments"
  join "customers" using ("customerId")
  group by "customers"."lastName",
           "customers"."firstName"
  order by "totalPaid" desc;
