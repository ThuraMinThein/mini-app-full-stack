
export function parsePrismaError(err) {

    switch (err.code) {

        case "P2000":
            return "Value too long for column";

        case "P2001":
            return "Record does not exist";

        case "P2002":
            return "Unique constraint failed";

        case "P2003":
            return "Foreign key constraint failed";

        case "P2004":
            return "Database constraint failed";

        case "P2005":
            return "Invalid value stored in database";

        case "P2006":
            return "Invalid value for field";

        case "P2007":
            return "Data validation error";

        case "P2008":
            return "Query parsing error";

        case "P2009":
            return "Query validation error";

        case "P2010":
            return "Raw query failed";

        case "P2011":
            return "Null constraint violation";

        case "P2012":
            return "Missing required value";

        case "P2013":
            return "Missing required argument";

        case "P2014":
            return "Invalid relation";

        case "P2015":
            return "Related record not found";

        case "P2016":
            return "Query interpretation error";

        case "P2017":
            return "Records are not connected";

        case "P2018":
            return "Required connected record not found";

        case "P2019":
            return "Input error";

        case "P2020":
            return "Value out of range";

        case "P2021":
            return "Table does not exist";

        case "P2022":
            return "Column does not exist";

        case "P2023":
            return "Inconsistent column data";

        case "P2024":
            return "Database connection timeout";

        case "P2025":
            return "Record not found";

        case "P2026":
            return "Unsupported database feature";

        case "P2027":
            return "Multiple database errors";

        case "P2028":
            return "Transaction error";

        case "P2029":
            return "Query parameter limit exceeded";

        case "P2030":
            return "Full-text search index missing";

        case "P2031":
            return "MongoDB replica set required";

        case "P2033":
            return "Number overflow";

        case "P2034":
            return "Transaction conflict";

        case "P2035":
            return "Assertion violation";

        case "P2036":
            return "External connector error";

        case "P2037":
            return "Too many database connections";

        default:
            return "Database request error";
    }

}