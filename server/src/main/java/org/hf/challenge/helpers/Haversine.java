package org.hf.challenge.helpers;


public class Haversine {

	//  Earth radius in KM
	private static final int EARTH_RADIUS = 6371;
	
    public static double distance(double lat1, double long1,double lat2, double long2) {

		double dLat  = Math.toRadians((lat2 - lat1));
		double dLong = Math.toRadians((long2 - long1));
		
		lat1 = Math.toRadians(lat1);
		lat2   = Math.toRadians(lat2);
		
		double a = haversin(dLat) + Math.cos(lat1) * Math.cos(lat2) * haversin(dLong);
		double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		
		return EARTH_RADIUS * c; 
	}
		
	public static double haversin(double val) {
		return Math.pow(Math.sin(val / 2), 2);
	}
}
