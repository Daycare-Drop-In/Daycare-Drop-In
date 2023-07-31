CREATE TABLE "families" (
	"id" SERIAL PRIMARY KEY,
	"family_name" VARCHAR (255) NOT NULL,
	"street_address" VARCHAR (500) NOT NULL,
	"unit" VARCHAR (255) DEFAULT NULL,
	"city" VARCHAR (255) NOT NULL,
	"state" VARCHAR (2) NOT NULL,
	"zip" INT NOT NULL,
	"photo_url" VARCHAR (1000),
	"access_code" VARCHAR (255) DEFAULT NULL
);
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"user_type" varchar(200) DEFAULT NULL,
	"family_id" INT REFERENCES "families" (id),
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone_number" varchar(15) NOT NULL,
	"photo_url" varchar(1000) DEFAULT NULL
);
CREATE TABLE "responsible_adults" (
	"id" SERIAL PRIMARY KEY,
	"family_id" INT REFERENCES "families" (id) NOT NULL,
	"first_name" VARCHAR (255) NOT NULL,
	"last_name" VARCHAR (255) NOT NULL,
	"phone_number" VARCHAR (15) NOT NULL,
	"email" VARCHAR (255),
	"relationship_to_child" VARCHAR (255) NOT NULL,
	"photo_url" VARCHAR (1000)
);
CREATE TABLE "children" (
	"id" SERIAL PRIMARY KEY,
	"family_id" INT REFERENCES "families" (id) NOT NULL,
	"first_name" VARCHAR (255) NOT NULL,
	"last_name" VARCHAR (255) NOT NULL,
	"birthdate" DATE,                             --modify to string??
	"allergies" TEXT,
	"potty_trained" BOOLEAN DEFAULT FALSE,
	"photo_url" VARCHAR (1000)
);
CREATE TABLE "providers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user" (id) NOT NULL,
	"license" VARCHAR (255) NOT NULL,
	"business_name" VARCHAR (255) NOT NULL,
	"street_address" VARCHAR (500) NOT NULL,
	"unit" VARCHAR (255) DEFAULT NULL,
	"city" VARCHAR (255) NOT NULL,
	"state" VARCHAR (2) NOT NULL,
	"zip" INT NOT NULL,
	"hours_open" VARCHAR (6),       -- test data not formatted for this 
	"hours_close" VARCHAR (6),      -- ""
	"rates" VARCHAR (1000),
	"meals" BOOLEAN DEFAULT FALSE,
	"business_description" TEXT,
	"personal_description" TEXT,
	"contract_language" TEXT
);
CREATE TABLE "provider_photos" (
	"id" SERIAL PRIMARY KEY,
	"provider_id" INT REFERENCES "providers" (id),
	"photo_url" VARCHAR (1000),
	"description" VARCHAR (1000)
);
CREATE TABLE "availability" (
	"id" SERIAL PRIMARY KEY,
	"provider_id" INT REFERENCES "providers" (id),
	"infant" INT DEFAULT NULL,
	"toddler" INT DEFAULT NULL,
	"pre_k" INT DEFAULT NULL,
	"schoolage" INT DEFAULT NULL,
	"date" DATE NOT NULL,
	"time_created" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE "bookings" (
	"id" SERIAL PRIMARY KEY,
	"provider_id" INT REFERENCES "providers" (id),
	"family_id" INT REFERENCES "families" (id),
	"child_id" INT REFERENCES "children" (id),
	"responsible_adult_id" INT REFERENCES "responsible_adults" (id),
	"user_id" INT REFERENCES "user" (id),
	"service_date" DATE,
	"time_submitted" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-------------------------------------------------- Starter Data ------------------------------------------------------------------------------
---STARTING FAMILY USER

INSERT INTO families ("family_name", "street_address", "unit", "city", "state", "zip", "photo_url", "access_code")
VALUES ('Ali', '123 New Street', null, 'MPLS', 'MN', 55407, 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', null)
RETURNING id;

INSERT INTO user ("username", "password", "user_type", "family_id", "first_name", "last_name", "email", "phone_number", "photo_url",)
VALUES ('abc@123.com', 'password', 'family', 1, 'Mo', 'Ali', 'abc@123.com', '(555)555-5555', 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png')
RETURNING id;

INSERT INTO children (family_id, first_name, last_name, birthdate, allergies, potty_trained, photo_url)
VALUES (1, 'Lil', 'Buddy', 2020-12-20, 'n/a', false, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAyXqGFi_knOElmYPrlmlBU40lV5Czgc18w')

INSERT INTO children (family_id, first_name, last_name, birthdate, allergies, potty_trained, photo_url)
VALUES (1, 'Big', 'Buddy', 2018-01-05, 'The sun, the moon, Mars, and Jupiter', true, 'https://illustoon.com/photo/4044.png')

INSERT INTO children (family_id, first_name, last_name, birthdate, allergies, potty_trained, photo_url)
VALUES (1, 'Medium', 'Buddy', 2019-4-10, 'n/a', true, 'https://content.mycutegraphics.com/graphics/kids/boy-waving.png')

INSERT INTO responsible_adults (family_id, first_name, last_name, phone_number, email, relationship_to_child, photo_url)
VALUES (1, 'Pooh', 'Bear', '(123)456-7890', 'pooh@bear.com', 'Uncle', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85JRO44bVUT1k5vsf4Kljah2GfDUdxe2jGA')


----------------------------------------
---STARTING PROVIDER USER

INSERT INTO user ("username", "password", "user_type", "family_id",	"first_name", "last_name", "email", "phone_number",	"photo_url")
VALUES ('def@456.com', 'password', 'provider', null, 'Winnie', 'Pooh', 'def@456.com', '(555)555-5556',  'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png')
RETURNING id;

INSERT INTO providers (	"user_id", "license", "business_name", "street_address", "unit", "city", "state", "zip", "hours", "rates", "meals", "business_description", "personal_description", "contract_language")
VALUES (2,'A1B2C3D4', 'Big Vibez Daycare', '456 New Street', null, 'MPLS', 'MN', 55407,'7:00', '17:00', 100, true, 'blah', 'blee', 'bluuuu' )
RETURNING user_id;


INSERT INTO availability (provider_id, infant, toddler, pre_k, schoolage, date)
VALUES (1, 2, 1, 3, 0, '2023-08-02');

INSERT INTO availability (provider_id, infant, toddler, pre_k, schoolage, date)
VALUES (1, 1, 2, 0, 0, '2023-08-03');

INSERT INTO availability (provider_id, infant, toddler, pre_k, schoolage, date)
VALUES (1, 1, 0, 0, 5, '2023-08-04');



------------------------------------------------------------------------------------------------------------------------



-- 										⌄⌄⌄⌄⌄  QUERIES A LA CARTE :D ⌄⌄⌄⌄⌄



--											⌄  AVAILABILITY  ⌄

--		GET ALL PROVIDER AVAILABILITIES ORDERED BY DATE ASC
`SELECT availability.*,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provider_close,
	providers.meals AS provider_meal
FROM availability
	JOIN providers ON availability.provider_id = providers.id
ORDER BY "date" ASC;`
--ADD A WHERE CLAUSE FOR PRE-FILTERING??????


--			GET ONE SPECIFIC PROVIDERS AVAILABILITY
`SELECT availability.*,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provider_close,
	providers.meals AS provider_meal
FROM availability
	JOIN providers ON availability.provider_id = providers.id
WHERE providers.id = $1
ORDER BY "date" ASC;`


-- 				ADD AN INSTANCE OF AVAILABILITY
`INSERT INTO availability (
		provider_id,
		infant,
		toddler,
		pre_k,
		schoolage,
		date
	)
VALUES($1, $2, $3, $4, $5, $6);`


-- 				EDIT AN INSTANCE OF AVAILABILITY
`UPDATE availability
SET infant = $1,
	toddler = $2,
	pre_k = $3,
	schoolage = $4
WHERE id = $5;`
-- MORE GRANULAR?

--										 ^  AVAILABILITY  ^

-----------------------------------------------------------------------------------------------

--									 	⌄  BOOKINGS  ⌄


--GET ALL OF THE RELEVANT INFORMATION FOR ALL BOOKINGS
`SELECT bookings.id AS booking_id,
	bookings.service_date AS booked_day,
	bookings.time_submitted AS time_booked,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provide_close,
	providers.meals AS provider_meal,
	children.id AS child_id,
	children.family_id AS child_fam_id,
	children.first_name AS child_first_name,
	children.last_name AS child_last_name,
	children.birthdate AS child_age,
	children.allergies AS child_allergies,
	children.potty_trained AS child_potty,
	children.photo_url AS child_pic,
	responsible_adults.id AS adult_id,
	responsible_adults.first_name AS adult_first_name,
	responsible_adults.last_name AS adult_last_name,
	responsible_adults.phone_number AS adult_number,
	responsible_adults.email AS adult_email,
	responsible_adults.relationship_to_child AS adult_relationship,
	responsible_adults.photo_url AS adult_pic,
	responsible_adults.family_id AS adult_fam_id,
	"user"."first_name" AS parent_first_name,
	"user"."last_name" AS parent_last_name,
	"user"."email" AS parent_email,
	"user"."phone_number" AS parent_number,
	"user"."photo_url" AS parent_pic,
	"user"."family_id" AS parent_fam_id,
	families.family_name AS fam_account_name,
	families.street_address AS fam_street_address,
	families.unit AS fam_unit,
	families.city AS fam_city,
	families.state AS fam_state,
	families.zip AS fam_zip,
	families.photo_url AS fam_pic
FROM bookings
	JOIN providers ON bookings.provider_id = providers.id
	JOIN children ON bookings.child_id = children.id
	JOIN responsible_adults ON bookings.responsible_adult_id = responsible_adults.id
	JOIN "user" ON bookings.user_id = "user".id
	JOIN families ON bookings.famiily_id = families.id
ORDER BY bookings.service_date ASC;`


-- GET ALL BOOKINGS BY FAMILYID
`SELECT bookings.id AS booking_id,
	bookings.service_date AS booked_day,
	bookings.time_submitted AS time_booked,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provide_close,
	providers.meals AS provider_meal,
	children.id AS child_id,
	children.family_id AS child_fam_id,
	children.first_name AS child_first_name,
	children.last_name AS child_last_name,
	children.birthdate AS child_age,
	children.allergies AS child_allergies,
	children.potty_trained AS child_potty,
	children.photo_url AS child_pic,
	responsible_adults.id AS adult_id,
	responsible_adults.first_name AS adult_first_name,
	responsible_adults.last_name AS adult_last_name,
	responsible_adults.phone_number AS adult_number,
	responsible_adults.email AS adult_email,
	responsible_adults.relationship_to_child AS adult_relationship,
	responsible_adults.photo_url AS adult_pic,
	responsible_adults.family_id AS adult_fam_id,
	"user"."first_name" AS parent_first_name,
	"user"."last_name" AS parent_last_name,
	"user"."email" AS parent_email,
	"user"."phone_number" AS parent_number,
	"user"."photo_url" AS parent_pic,
	"user"."family_id" AS parent_fam_id,
	families.family_name AS fam_account_name,
	families.street_address AS fam_street_address,
	families.unit AS fam_unit,
	families.city AS fam_city,
	families.state AS fam_state,
	families.zip AS fam_zip,
	families.photo_url AS fam_pic
FROM bookings
	JOIN providers ON bookings.provider_id = providers.id
	JOIN children ON bookings.child_id = children.id
	JOIN responsible_adults ON bookings.responsible_adult_id = responsible_adults.id
	JOIN "user" ON bookings.user_id = "user".id
	JOIN families ON bookings.family_id = families.id
WHERE families.id = $1
ORDER BY bookings.service_date ASC;`


-- GET ALL BOOKINGS BY PROVIDERID
`SELECT bookings.id AS booking_id,
	bookings.service_date AS booked_day,
	bookings.time_submitted AS time_booked,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provide_close,
	providers.meals AS provider_meal,
	children.id AS child_id,
	children.family_id AS child_fam_id,
	children.first_name AS child_first_name,
	children.last_name AS child_last_name,
	children.birthdate AS child_age,
	children.allergies AS child_allergies,
	children.potty_trained AS child_potty,
	children.photo_url AS child_pic,
	responsible_adults.id AS adult_id,
	responsible_adults.first_name AS adult_first_name,
	responsible_adults.last_name AS adult_last_name,
	responsible_adults.phone_number AS adult_number,
	responsible_adults.email AS adult_email,
	responsible_adults.relationship_to_child AS adult_relationship,
	responsible_adults.photo_url AS adult_pic,
	responsible_adults.family_id AS adult_fam_id,
	"user"."first_name" AS parent_first_name,
	"user"."last_name" AS parent_last_name,
	"user"."email" AS parent_email,
	"user"."phone_number" AS parent_number,
	"user"."photo_url" AS parent_pic,
	"user"."family_id" AS parent_fam_id,
	families.family_name AS fam_account_name,
	families.street_address AS fam_street_address,
	families.unit AS fam_unit,
	families.city AS fam_city,
	families.state AS fam_state,
	families.zip AS fam_zip,
	families.photo_url AS fam_pic
FROM bookings
	JOIN providers ON bookings.provider_id = providers.id
	JOIN children ON bookings.child_id = children.id
	JOIN responsible_adults ON bookings.responsible_adult_id = responsible_adults.id
	JOIN "user" ON bookings.user_id = "user".id
	JOIN families ON bookings.family_id = families.id
WHERE providers.id = $1
ORDER BY bookings.service_date ASC;`


-- CREATE A BOOKINGS INSTANCE
`INSERT INTO bookings (
		provider_id,
		child_id,
		responsible_adult_id,
		user_id,
		service_date
	)
VALUES ($1, $2, $3, $4, $5);`


-- REMOVE A SPECIFIC BOOKING INSTANCE
`DELETE FROM bookings
WHERE id = $1;`


--									 	^  BOOKINGS  ^

-----------------------------------------------------------------------------------------------

--										 ⌄  CHILDREN  ⌄

-- GET ALL CHILDREN FOR A SPECIFIC FAMILY
`SELECT *
FROM children
WHERE family_id = $1;`


-- EDIT A SPECIFIC CHILDS INFORMATION
`UPDATE children
SET first_name = $1,
	last_name = $2,
	birthdate = $3,
	allergies = $4,
	potty_trained = $5,
	photo_url = $6
WHERE id = $7;`


-- ADD A NEW CHILD
`INSERT INTO children (
		family_id,
		first_name,
		last_name,
		birthdate,
		allergies,
		potty_trained,
		photo_url
	)
VALUES ($1, $2, $3, $4, $5, $6, $7);`


-- DELETE A CHILD FROM FAMILY
`DELETE FROM children
WHERE id = $1;`


--											 ^  CHILDREN  ^

-----------------------------------------------------------------------------------------------

--											 ⌄  FAMILY  ⌄


-- GET FAMILY INFORMATION BY ID
`SELECT "user".first_name AS parent_first_name,
	"user".last_name AS parent_last_name,
	"user".email AS parent_email,
	"user".phone_number AS parent_number,
	"user".photo_url AS parent_pic,
	families.*
FROM "user"
	JOIN families ON "user".family_id = families.id
WHERE "user".family_id = $1;`


-- GET ALL FAMILY INFORMATION
`SELECT "user".first_name AS parent_first_name,
	"user".last_name AS parent_last_name,
	"user".email AS parent_email,
	"user".phone_number AS parent_number,
	"user".photo_url AS parent_pic,
	families.*
FROM "user"
	JOIN families ON "user".family_id = families.id;`


-- EDIT FAMILY INFORMATION
`UPDATE families
SET family_name = $1,
	street_address = $2,
	unit = $3,
	city = $4,
	state = $5,
	zip = $6,
	photo_url = $7,
	access_code = $8
WHERE id = $9;`

-- DELETE FAMILY BY ID
`DELETE FROM families
WHERE id = $1;`


--											 ^  FAMILY  ^

-----------------------------------------------------------------------------------------------

--								 			⌄  PROVIDERS  ⌄


-- GET A SPECIFIC PROVIDERS INFORMATION
`SELECT providers.*,
	"user".first_name,
	"user".last_name,
	"user".email,
	"user".phone_number,
	"user".photo_url AS provider_pic
FROM providers
	JOIN "user" ON providers.user_id = "user".id
WHERE providers.id = $1;`


-- GET ALL PROVIDER INFORMATION
`SELECT providers.*,
	"user".first_name AS prov_first_name,
	"user".last_name AS prov_last_name,
	"user".email AS prov_email,
	"user".phone_number AS prov_number,
	"user".photo_url AS prov_pic
FROM providers
	JOIN "user" ON providers.user_id = "user".id;`


-- EDIT A SPECIFIC PROVIDERS INFORMATION
`UPDATE providers
SET license = $1,
	business_name = $2,
	street_address = $3,
	unit = $4,
	city = $5,
	state = $6,
	zip = $7,
	hours_open = $8,
	hours_close = $9,
	rates = $10,
	meals = $11,
	business_description = $12,
	personal_description = $13,
	contract_language = $14
WHERE id = $15;`


-- REMOVE A SPECIFIC PROVIDER
`DELETE FROM providers
WHERE id = $1;`

--  										^  PROVIDERS  ^

-----------------------------------------------------------------------------------------------

--							 				⌄  PHOTOS  ⌄

-- GET ALL PROVIDER GALLERY PHOTOS
`SELECT *
FROM provider_photos
WHERE provider_id = $1;`


-- ADD TO PROVIDER PHOTO GALLERY
`INSERT INTO provider_photos (provider_id, photo_url, description)
VALUES ($1, $2, $3);`


-- REMOVE FROM PROVIDER PHOTO GALLERY
`DELETE FROM provider_photos
WHERE id = $1;`


--							 				^  PHOTOS  ^

----------------------------------------------------------------------------------------------------

--											 ⌄  RESP ADULTS  ⌄

-- GET ALL RESP ADULTS FOR A SPECIFIC FAMILY
`SELECT *
FROM responsible_adults
WHERE responsible_adults.family_id = $1;`


-- EDIT A RESP ADULTS INFORMATION
`UPDATE responsible_adults
SET first_name = $1,
	last_name = $2,
	phone_number = $3,
	email = $4,
	relationship_to_child = $5,
	photo_url = $6
WHERE id = $7;`


-- ADD A RESP ADULT
`INSERT INTO responsible_adults (
		family_id,
		first_name,
		last_name,
		phone_number,
		email,
		relationship_to_child,
		photo_url
	)
VALUES ($1, $2, $3, $4, $5, $6, $7);`

-- REMOVE A RESP ADULT
`DELETE FROM responsible_adults WHERE id = $1;`

--											 ^ RESP ADULTS  ^

