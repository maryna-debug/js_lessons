# Homework 16 – SOAP (Postman)

## Description
This homework demonstrates working with SOAP API using Postman.

## Collection
SOAP Homework 16

## Requests
1. IsValidISBN13 - valid  
   - Expected result: true
2. IsValidISBN10 - valid  
   - Expected result: true
3. IsValidISBN13 - invalid  
   - Expected result: false

## Tests
- Status code is 200
- Content-Type header contains XML
- SOAP Envelope and Body exist
- Correct Response and Result tags
- Result value validation (true / false)
- No SOAP Fault in response

## Tools
- Postman
- SOAP API
