import { STATUS_CONSTANT } from "@library/tsc-common";

export const LIST_CONSTANT = {

    CONDITION: [
        {
            label: '>= (Greater or Equal)',
            value: 'GTE'
        },
        {
            label: '<= (Less or Equal)',
            value: 'LTE'
        },
        {
            label: '= (Equal)',
            value: 'EQUAL'
        },
        {
            label: '> (Greater than)',
            value: 'GREATER'
        },
        {
            label: '< (Less than)',
            value: 'LESS'
        },
        {
            label: 'between',
            value: 'BETWEEN'
        }
    ],

    EMAIL_FREQUENCY: [
        {
            label: "Never",
            value: "NEVER"
        },
        {
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            label: "4 Hrs",
            value: "HOURS_4"
        }
    ],

    SMS_FREQUENCY: [
        {
            label: "Never",
            value: "NEVER"
        },
        {
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            label: "12 Hrs",
            value: "HOURS_12"
        }
    ],

    ESCALATION_FREQUENCY: [
        {
            label: "Day",
            value: "DAY"
        },
        {
            label: "Hour",
            value: "HOUR"
        },
        {
            label: "Min",
            value: "MIN"
        }
    ],

    ALERT_RULE_FREQUENCY: [
        {
            label: 'Instant',
            value: 'INSTANT'
        },
        {
            label: "Daily(Today)",
            value: "DAILY_TODAY"
        },
        {
            label: "Daily(Yesterday)",
            value: "DAILY_YESTERDAY"
        },
        {
            label: "Monthly(Current month)",
            value: "MONTHLY_CURRENT"
        },
        {
            label: "Monthly(Last month)",
            value: "MONTHLY_LAST"
        },
        {
            label: "Hourly(Current hour)",
            value: "HOURLY_CURRENT"
        },
        {
            label: "Hourly(Last hour)",
            value: "HOURLY_LAST"
        }
    ],

    TREND_DATE_RANGE: [
        {
            label: "Last 24 hrs",
            value: "LAST_24_HRS"
        },
        {
            label: "Last 7 days",
            value: "LAST_7_DAYS"
        },
        {
            label: "Last 30 days",
            value: "LAST_30_DAYS"
        }
    ],

    AGGREGATION_DURATION: [] = [
        {
            label: "15 minutes",
            value: "min_15"

        },
        {
            label: "30 minutes",
            value: "min_30"
        },
        {
            label: "Hourly",
            value: "hour_1"
        },
        {
            label: "12 hours",
            value: "hour_12"
        },
        {
            label: "Daily",
            value: "day_1"
        },
        {
            label: "Monthly",
            value: "month_1"
        }
    ],

    AGGREGATION: [] = [
        {
            label: 'Absolute Average',
            value: 'avgabs'
        },
        {
            label: 'Absolute Maximum',
            value: 'maxabs'
        },
        {
            label: 'Absolute Minimum',
            value: 'minabs'
        },
        {
            label: 'Absolute Sum',
            value: 'sumabs'
        },
        {
            label: 'Average',
            value: 'avg'
        },
        {
            label: 'Count',
            value: 'count'
        },
        {
            label: 'First',
            value: 'first'
        },
        {
            label: 'Last',
            value: 'last'
        },
        {
            label: 'Maximum',
            value: 'max'
        },
        {
            label: 'Minimum',
            value: 'min'
        },
        {
            label: 'Sum',
            value: 'sum'
        }
    ],

    DOWNLOAD_TYPE: [] = [
        {
            label: "PDF",
            value: "pdf"
        },
        {
            label: "CSV",
            value: "csv"
        },
        {
            label: "XLSX",
            value: "xlsx"
        }
    ],

    SOURCE_LOAD: [] = [
        {
            label: "Source",
            value: "source"
        },
        {
            label: "Consumer",
            value: "load"
        }
    ],

    HOURLY_NOTIFICATION_FREQUENCY: [] = [
        {
            hour: 1,
            label: "1 Hr",
            value: "HOURS_1"
        },
        {
            hour: 2,
            label: "2 Hrs",
            value: "HOURS_2"
        },
        {
            hour: 4,
            label: "4 Hrs",
            value: "HOURS_4"
        },
        {
            hour: 6,
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            hour: 8,
            label: "8 Hrs",
            value: "HOURS_8"
        },
        {
            hour: 12,
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            hour: 24,
            label: "24 Hrs",
            value: "HOURS_24"
        }
    ],

    HOURLY_REMINDER_FREQUENCY: [] = [
        {
            hour: 2,
            label: "2 Hrs",
            value: "HOURS_2"
        },
        {
            hour: 4,
            label: "4 Hrs",
            value: "HOURS_4"
        },
        {
            hour: 6,
            label: "6 Hrs",
            value: "HOURS_6"
        },
        {
            hour: 12,
            label: "12 Hrs",
            value: "HOURS_12"
        },
        {
            hour: 24,
            label: "24 Hrs",
            value: "HOURS_24"
        },
        {
            hour: 48,
            label: "48 Hrs",
            value: "HOURS_48"
        }
    ],

    ENERGY_APP_SCHEDULE_REPORT_TYPE: [] = [
        {
            label: "Energy sourcing report",
            value: "SOURCING_REPORT"
        },
        {
            label: "Energy breakup report",
            value: "BREAKUP_REPORT"
        },
        {
            label: "Energy consumption report",
            value: "CONSUMPTION_REPORT"
        },
        {
            label: "Temperature Report",
            value: "TEMPERATURE_REPORT"
        }
    ],

    WATER_APP_SCHEDULE_REPORT_TYPE: [] = [
        {
            label: "Water sourcing report",
            value: "SOURCING_REPORT"
        },
        {
            label: "Water breakup report",
            value: "BREAKUP_REPORT"
        },
        {
            label: "Water consumption report",
            value: "CONSUMPTION_REPORT"
        },
        {
            label: "CGWA Report",
            value: "CGWA_REPORT"
        }
    ]
}