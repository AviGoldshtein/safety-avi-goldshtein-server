/**
 * @swagger
 * components:
 *   schemas:
 *     CreateEvent:
 *       type: object
 *       required:
 *         - activityType
 *         - unitActivityType
 *         - category
 *         - location
 *         - eventSeverity
 *         - results
 *         - weather
 *         - eventDateTime
 *         - eventTime
 *         - eventDescription
 *         - subUnits
 *       properties:
 *         activityType:
 *           type: string
 *           enum:
 *             - פעילות מבצעית/לחימה
 *             - אימון
 *             - הכשרה
 *             - שגרה
 *             - פנאי
 *             - חופשה
 *
 *         unitActivityType:
 *           type: string
 *           enum:
 *             - תע"ם
 *             - אימונים
 *             - הכשרה
 *             - רגיעה / מנהלה
 *             - מלחמה/מבצע צבאי נרחב
 *
 *         category:
 *           type: string
 *           enum:
 *             - נשק ומקלעים
 *             - דרכים
 *             - תחמושת
 *             - 'ירי דו"צ'
 *             - מזג-אוויר
 *             - רק"מ וצמ"ה קרביים
 *             - שת"פ אוויר
 *             - עבודה
 *             - אוויר
 *             - בטיחות ימי
 *             - ספורט ואקסטרים
 *             - נפילות/חבלות
 *             - חריגות ירי או תנועה של כוחות בשטחי אימונים
 *             - חומ"ס
 *             - אמל"ח (לא נשק/מקלעים)
 *             - אש
 *             - טג"ח קרבי
 *             - שת"פ ים
 *             - ייעודי עורף/חילוץ והצלה
 *             - אמצעי רום קרוב לקרקע
 *             - כושר גופני/קרבי
 *
 *         location:
 *           type: string
 *           enum: [בסיס, שטח אזרחי, שטח אש, רציף]
 *
 *         eventSeverity:
 *           type: string
 *           enum: [קל, בינוני, חמור]
 *
 *         results:
 *           type: string
 *           enum:
 *             - א.נ.א.נ (אין נפגעים, אין נזק)
 *             - א.נ.י.נ (אין נפגעים, יש נזק)
 *             - י.נ.א.נ (יש נפגעים, אין נזק)
 *             - י.נ.י.נ (יש נפגעים, יש נזק)
 *
 *         injuriesLevel:
 *           type: string
 *           nullable: true
 *           enum:
 *             - ללא פגיעה
 *             - פגוע קל (ללא אשפוז)
 *             - פגוע קל (שאושפז)
 *             - פגוע בינוני
 *             - פגוע קשה/אנוש
 *             - חלל
 *
 *         typeLocation:
 *           type: string
 *           nullable: true
 *           enum: [נצ, לווין]
 *
 *         weather:
 *           type: string
 *           enum:
 *             - שרב/עומס חום
 *             - שלג
 *             - סופת חול
 *             - גשם
 *             - ערפל
 *             - התקרחות
 *             - ברד
 *             - מעונן
 *             - נאה
 *             - רוח
 *             - ים סוער
 *             - מים שקטים
 *
 *         currentLocation:
 *           type: object
 *           nullable: true
 *           properties:
 *             lat:
 *               type: number
 *             lng:
 *               type: number
 *
 *         eventDateTime:
 *           type: string
 *           format: date-time
 *
 *         eventTime:
 *           type: string
 *
 *         eventDescription:
 *           type: string
 *           minLength: 15
 *
 *         subUnits:
 *           type: string
 *           minLength: 1
 *
 *     UpdateEvent:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateEvent'
 *       description: Partial update of event (all fields optional)
 */
