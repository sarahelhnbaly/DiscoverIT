package com.discoverit.dialect;

import org.hibernate.dialect.Dialect;

public class CustomSQLiteDialect extends Dialect {

    public CustomSQLiteDialect() {
        super();
    }

    @Override
    public boolean supportsIdentityColumns() {
        return true; // Specify if it supports identity columns
    }

    // Check if this method exists in your Dialect version, if not, opt for alternatives.
    @Override
    public String getIdentitySelectString() {
        return "SELECT last_insert_rowid()"; // SQLite way to retrieve the last inserted ID
    }

    @Override
    public String getIdentityColumnString() {
        return "INTEGER PRIMARY KEY AUTOINCREMENT"; // Type of identity column in SQLite, adjust as needed
    }

    @Override
    public String getTableTypeString() {
        return ""; // SQLite only requires empty string for this method
    }

    @Override
    public boolean supportsLimit() {
        return true; // Supports LIMIT clause in SQLite
    }

    @Override
    public String getLimitString(String query, boolean hasOffset) {
        return query + (hasOffset ? " LIMIT ?" : " LIMIT ?");
    }

    @Override
    public boolean supportsOuterJoins() {
        return true; // SQLite supports outer joins
    }

    @Override
    public boolean supportsUnionAll() {
        return true; // SQLite supports UNION ALL
    }

    // Add more overrides if required by your implementation
}