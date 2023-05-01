
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.Collections;

public class test {

	public static int[] findIndices(int[] nums, int target) {

		ArrayList<Integer> numList = new ArrayList<Integer>();

		for (int x : nums) {
			numList.add(x);
		}

		for (int i = 0; i < nums.length; i++) {
			int difference = target - nums[i];
			int findDifference = numList.indexOf(difference);
			if (findDifference != i && findDifference != -1) {
				return new int[] { i, findDifference };
			}

		}
		return new int[] { 0, 0 };
	}

	public static void main(String[] args) {
		int[] nums = { 3, 7, 11, 15, 22, 31 };
		int target = 29;

		System.out.println(Arrays.toString(findIndices(nums, target)));
	}
}