import java.util.ArrayList;
import java.util.Arrays;

//JAVA Questions
// 2. In terms of inheritance, when a constructor is private the class cannot be inherited or 'extended'. Unless perhaps it is a subclass inheriting from another sub class.

// 3. written method below `replaceSpaces`, a bit confused on the question but I think this is the functionality desired

public class Test {

	public static int[] findIndices(int[] nums, int target) {

		ArrayList<Integer> numList = new ArrayList<Integer>();

		for (int x : nums) {
			numList.add(x);
		}

		for (int i = 0; i < nums.length; i++) {
			int difference = target - nums[i];
			int indexOfDifference = numList.indexOf(difference);
			if (indexOfDifference != i && indexOfDifference != -1) {
				return new int[] { i, indexOfDifference };
			}

		}
		return new int[] { 0, 0 };
	}

	public static String replaceSpaces(String original) {

		char[] originalChar = original.toCharArray();
		String returnString = "";

		for (int i = 0; i < originalChar.length; i++) {

			char nextChar = ' ';

			if (i + 1 < originalChar.length) {
				nextChar = originalChar[i + 1];
			}

			if (originalChar[i] == ' ') {

				if (nextChar != ' ') { // if one space we add %20
					returnString += "%20";
				} else { // if double spaces, we skip
					continue;
				}

			} else { // if regular character we just add it to string
				returnString += originalChar[i];
			}
		}

		return returnString;
	}

	public static void main(String[] args) {
		int[] nums = { 3, 7, 11, 15, 22, 31 };
		int target = 29;

		System.out.println(Arrays.toString(findIndices(nums, target)));

		String test = "Micro Control Systems  ";

		System.out.println(replaceSpaces(test));

	}
}