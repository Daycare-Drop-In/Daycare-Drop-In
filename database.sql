CREATE TABLE "families" (
	"id" SERIAL PRIMARY KEY,
	"family_name" VARCHAR (255) NOT NULL,
	"street_address" VARCHAR (500) NOT NULL,
	"unit" VARCHAR (255) DEFAULT NULL,
	"city" VARCHAR (255) NOT NULL,
	"state" VARCHAR (2) NOT NULL,
	"zip" INT NOT NULL,
	"photo_url" VARCHAR (1000),
	"access_code" VARCHAR (255) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"user_type" varchar(200) NOT NULL,
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
	"birthdate" DATE,
	"allergies" TEXT,
	"potty_trained" BOOLEAN DEFAULT FALSE,
	"photo_url" VARCHAR (1000)
);

CREATE TABLE "providers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user_info" (id) NOT NULL,
	"license" VARCHAR (255) NOT NULL,
	"business_name" VARCHAR (255) NOT NULL,
	"street_address" VARCHAR (500) NOT NULL,
	"unit" VARCHAR (255) DEFAULT NULL,
	"city" VARCHAR (255) NOT NULL,
	"state" VARCHAR (2) NOT NULL,
	"zip" INT NOT NULL,
	"hours_open" VARCHAR (1000),
	"hours_close" VARCHAR (1000),
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
	"infant" INT,
	"toddler" INT,
	"pre_k" INT,
	"schoolage" INT,
	"date" DATE,
	"time_created" TIMESTAMP

);

CREATE TABLE "bookings" (
	"id" SERIAL PRIMARY KEY,
	"provider_id" INT REFERENCES "providers" (id),
	"child_id" INT REFERENCES "children" (id),
	"responsible_adult_id" INT REFERENCES "responsible_adults" (id),
	"user_id" INT REFERENCES "user_info" (id),
	"service_date" DATE,
	"time_submitted" TIMESTAMP
);



-------------------------------------------------- Starter Data ------------------------------------------------------------------------------
---STARTING FAMILY USER

INSERT INTO families ("family_name", "street_address", "unit", "city", "state", "zip", "photo_url", "access_code")
VALUES ('Ali', '123 New Street', null, 'MPLS', 'MN', 55407, 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png', null)
RETURNING id;

INSERT INTO user ("username",
"password",
"user_type",
"family_id",
"first_name",
"last_name",
"email",
"phone_number",
"photo_url",)
VALUES ('abc@123.com', 'password', 'family', 1, 'Mo', 'Ali', 'abc@123.com', '(555)555-5555', 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png')
RETURNING id;



----------------------------------------
---STARTING PROVIDER USER

INSERT INTO user (
		"username",
		"password",
		"user_type",
		"family_id",
		"first_name",
		"last_name",
		"email",
		"phone_number",
		"photo_url",
	)
VALUES (
		'def@456.com',
		'password',
		'provider',
		null,
		'Winnie',
		'Pooh',
		'def@456.com',
		'(555)555-5556',
		'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
	)
RETURNING id;


INSERT INTO providers (
		"user_id",
		"license",
		"business_name",
		"street_address",
		"unit",
		"city",
		"state",
		"zip",
		"hours",
		"rates",
		"meals",
		"business_description",
		"personal_description",
		"contract_language"
	)

VALUES (2,'A1B2C3D4', 'Big Vibez Daycare', '456 New Street', null, 'MPLS', 'MN', 55407,'7:00', '17:00', 100, true, 'blah', 'blee', 'bluuuu' )
RETURNING user_id;



