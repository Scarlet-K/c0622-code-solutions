select "First Name",
       "Last Name",
       sum("amount") as "Total Amount Paid"
  from "payments"
  join "customers" using ("customerId")
  group by "customers"."lastName",
           "customers"."firstName"
  order by "totalPaid" desc;
