package utils

func GetOffsetFromPageLimit(page int32, limit int32) int32 {
	if page <= 1 {
		return 0
	}

	return (page - 1) * limit
}
