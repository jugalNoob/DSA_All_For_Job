| Test          | Expected               |
| ------------- | ---------------------- |
| Redis slow    | Timeout → fallback ✅   |
| Redis down    | Fallback works ✅       |
| High CPU      | System survives ✅      |
| Network issue | Retry/fallback works ✅ |
