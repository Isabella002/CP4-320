# * Bored * API Documentation
*This API is meant for the user to use when they are bored. The webpage fetches a random activity based on the users input that is meant to appease their boredom.*

## *Get Activites*
**Request Format:** *N/A*

**Request Type:** *GET*

**Returned Data Format**: Plain Text

**Description:** *Retrieves a list of custom activities *


**Example Request:** *GET /api/activites*

**Example Response:**
*Fill in example response in the ticks*

``` Sample Activity 1 

``` Sample Activity 2

**Error Handling:**
*In case of an error, an appropriate HTTP status code will be returned.*

## *Add Activity*
**Request Format:** *JSON*

**Request Type:** *POST*

**Returned Data Format**: JSON

**Description:** *Adds a new activity to the list.*

**Example Request:** *POST /api/activites*

**Example Response:**
*Fill in example response in the {}*

```json
{
    "key": "3",
    "activity": "New Activity"

}
```json
{
    "message": "Activity Added Successfully"
}

**Error Handling:**
*In case of an error, an appropriate HTTP status code will be returned along with 
an error message.  *
