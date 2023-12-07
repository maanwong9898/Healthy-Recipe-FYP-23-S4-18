
/* SELECT * FROM WORKCOUNT WHERE WORK_SLOT_ID IN */

-- This is the function called when 
-- user logged in && clicking on any of the calendar dates 
-- obviously replace date + ID

-- SELECT * FROM BID 
-- WHERE BID.userid = 1 AND
-- BID.WORK_SLOT_ID IN
-- (SELECT WORKSLOT.work_slotid FROM WORKSLOT 
--     WHERE WORKSLOT.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y'));

-- SELECT * FROM BID b INNER JOIN WORKSLOT w ON b.WORK_SLOT_ID = w.work_slotid WHERE w.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y') AND b.userid = 1;
 


-- UPDATE BID
-- SET BID_STATUS = "APPROVED"
-- WHERE BID.userid = 1 AND
-- BID.WORK_SLOT_ID IN
-- (SELECT WORKSLOT.work_slotid FROM WORKSLOT 
    -- WHERE WORKSLOT.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y'));

/*
To load {Today's} workslots
	it needs to require role of {currentStaff.role}
	It needs to be available, in terms of
		{currentStaff} havent bid for it
        Check BID table, how many people's bidding for it
            How many of those bids are 'approved'
                Then Amongst those, how many of the have the role of {currentStaff.role}
		Look for the rest of the staff that bids for Today's workslot, ca
	Staff 

> with {user.role}
 
1.
> First get {Date} WORKSLOT         
    // get WORKSLOT.ID
    // if no WORKSLOT, exit;

    2.
    > Then check for BID.id = {user.id} && BID.workSlotId = WORKSLOT.id
        // check if {user} has bid for it , 
        //if alrd bid, exit;

        3.
        > Then check WORKSLOT.id = WORKCOUNT.id 
            // to get the WORKSLOT.role required, if its == {user.role}, 
                    // then we also get WORKSLOT.count
            // if 0 <= WORKCOUNT.count, exit; though we should have a default of at least 1 
        
        4. 
        > Then check for BID.id != {user.id} 
            && BID.workSlotId = WORKSLOT.id 
            && BID.status = 'Approved'
            // get the count of it, see if its >= WORKCOUNT.count, exit

            > At this point we can guarantee, there's workslots, and with free slots,
              
*/
-- replacing the date obviously 
  
/* 
This statement gets me {user}'s bids of {desired Date}
        replace B.userid = {user.id} 
            and C.Role = {user.role} 
            and S.WORK_DATE = {desired Date} 
*/

-- This is 1, where i filter all the available workslots for the day
-- SELECT WS.work_slotid FROM WORKSLOT WS WHERE WS.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y')

-- This is 2, where i filter all the bids for the day
-- SELECT * FROM WORKCOUNT B WHERE B.userid = 1 AND B.work_slot_id IN
-- (SELECT WS.work_slotid FROM WORKSLOT WS WHERE WS.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y'));

-- This is 3, where i filter all the WORKCOUNT that has user's role for the day
-- SELECT * FROM WORKCOUNT B WHERE B.role = "CHEF" AND B.work_slot_id IN
-- (SELECT WS.work_slotid FROM WORKSLOT WS WHERE WS.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y'));

-- This is 4, where i filter all the 
SELECT * FROM BID B WHERE B.userid != 1 
    AND B.BID_STATUS = 'Approved'; 
    -- AND B.work_slot_id IN 
-- (SELECT WS.work_slotid FROM WORKSLOT WS WHERE WS.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y');
-- SELECT WC.COUNT FROM WORKCOUNT WC WHERE WC.role = "CHEF" AND WC.work_slot_id IN
-- (SELECT WS.work_slotid FROM WORKSLOT WS WHERE WS.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y'));

/*  
SELECT * FROM WORKSLOT S  
JOIN WORKCOUNT C 
    ON S.WORK_SLOTID = C.WORK_SLOT_ID  
    AND S.WORK_DATE = STR_TO_DATE('29-Nov-23', '%d-%b-%y') 
    AND C.Role = 'CASHIER'
JOIN BID B 
    ON B.userid = 1 
    AND B.work_slot_id = S.WORK_SLOTID; */ 
/* WORK_DATE = CURDATE()  */